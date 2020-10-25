class ArchiveNotWritableError extends Error {
	constructor(message) {
		super(message)
		this.name = 'ArchiveNotWritableError'
	}
}
export default ArchiveNotWritableError