export interface UserRemoteRepositoryInterface {
	getSignInMethodsForEmail(email: string): Promise<string[]>
}
