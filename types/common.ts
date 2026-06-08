/**
 * Data veracity model. Every sensitive field carries its own status so we
 * never present unconfirmed data as fact.
 *  - verified:     backed by the research with a source.
 *  - needs_review: public sources report it inconsistently (hours, prices...).
 *  - placeholder:  not present in the research yet → render a fallback.
 */
export type VerificationStatus = 'verified' | 'needs_review' | 'placeholder';

export type Field<T> = {
  value: T | null;
  status: VerificationStatus;
  source?: string;
};

export function field<T>(
  value: T | null,
  status: VerificationStatus,
  source?: string,
): Field<T> {
  return { value, status, source };
}

/** A field that is known to be missing — render the "to be confirmed" fallback. */
export function placeholder<T>(): Field<T> {
  return { value: null, status: 'placeholder' };
}
