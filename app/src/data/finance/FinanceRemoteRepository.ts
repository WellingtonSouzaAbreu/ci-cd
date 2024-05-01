import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

import { FinanceEntity, FinanceEntityOptional } from '@domain/finance/model/entity/types'

import { remoteStorageKeys } from '@data/keys/remoteStorageKeys'

const { firebaseFirestore } = useFirebaseConfig()

export interface FinanceRemoteRepositoryInterface { // REFACTOR Deve ficar em provider no domínio
	createFinance(data: FinanceEntityOptional): Promise<FinanceEntity>
}

export class FinanceRemoteRepository implements FinanceRemoteRepositoryInterface {
	async createFinance(data: FinanceEntity) {
		console.log('create!')
		console.log(data)

		const collectionRef = collection(firebaseFirestore, remoteStorageKeys.FINANCE_REPOSITORY)

		const financeData = { ...data, createdAt: new Date() }
		const docRef = await addDoc(collectionRef, financeData)

		return { ...financeData, id: docRef.id } as FinanceEntity
	}
}
