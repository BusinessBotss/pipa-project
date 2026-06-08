export function isSafePublicUrl(url: string): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url, 'http://localhost');
    // Block javascript:, vbscript:, data:, etc if not explicitly allowed
    if (['javascript:', 'vbscript:', 'data:'].includes(parsed.protocol)) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export function safeExternalHref(url: string): string | undefined {
  return isSafePublicUrl(url) ? url : undefined;
}
