export function isValidType(type: unknown, allowArray?: boolean): boolean {
	return (
		typeof type === 'string' ||
		typeof type === 'symbol' ||
		(!!allowArray &&
			Array.isArray(type) &&
			type.every((t) => isValidType(t, false)))
	)
}
