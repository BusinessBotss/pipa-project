import { NextRequest, NextResponse } from 'next/server';
import { LOCALES, DEFAULT_LOCALE, isLocale } from '@/types/locale';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const first = pathname.split('/')[1];
  const isLocalePrefix = isLocale(first);
  const pathWithoutLocale = isLocalePrefix ? pathname.substring(first.length + 1) : pathname;
  const url = request.nextUrl.clone();

  if (pathWithoutLocale.startsWith('/staff') || pathname === '/staff') {
    const isEnabled = process.env.STAFF_DASHBOARD_ENABLED === 'true';
    const expectedPassword = process.env.STAFF_DASHBOARD_PASSWORD;

    if (!isEnabled || !expectedPassword) {
      // 404 to hide the existence
      url.pathname = `/${DEFAULT_LOCALE}/_not-found`;
      return NextResponse.rewrite(url, { status: 404 });
    }

    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Staff Dashboard"' },
      });
    }

    try {
      const authValue = authHeader.split(' ')[1];
      const decoded = atob(authValue);
      const [user, pwd] = decoded.split(':');

      let isValid = false;
      if (user === 'staff' && pwd === expectedPassword) {
        isValid = true;
      }
      
      if (!isValid) {
        return new NextResponse('Unauthorized', {
          status: 401,
          headers: { 'WWW-Authenticate': 'Basic realm="Staff Dashboard"' },
        });
      }
    } catch {
      return new NextResponse('Unauthorized', { status: 401 });
    }
  }

  if (isLocalePrefix) return NextResponse.next();

  // Redirect to the default-locale URL, preserving the path.
  url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};

export { LOCALES };
