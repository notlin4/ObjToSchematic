export type TBrand<K, T> = K & { __brand: T };

export type Vector3Hash = TBrand<number, 'Vector3Hash'>;

export type TDithering = 'off' | 'random' | 'ordered';

export type TAxis = 'x' | 'y' | 'z';

export type TTexelExtension = 'repeat' | 'clamp';

export type TTexelInterpolation = 'nearest' | 'linear';

export type WrappedWarnings = {};

export type WrappedInfo = {}

/** Wrapped simply wraps a payload with a list of warnings/info associated with it */
export type Wrapped<T> = { payload: T, warnings: WrappedWarnings[], info: WrappedInfo[] };

export type BlockPalette = Set<string>;

export type Result<T, E = Error> =
  | { ok: true, value: T }
  | { ok: false, error: { code: E, message?: string } };