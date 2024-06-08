import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

import { FinanceEntity } from '@domain/finance/model/entity/types'
import { FinanceRemoteRepositoryInterface } from '@domain/finance/provider'

import { remoteStorageKeys } from '@data/keys/remoteStorageKeys'

const { firebaseFirestore } = useFirebaseConfig()

export class FinanceRemoteRepository implements FinanceRemoteRepositoryInterface {
	async createFinance(data: FinanceEntity) {
		const collectionRef = collection(firebaseFirestore, remoteStorageKeys.FINANCE_REPOSITORY)

		const financeData = { ...data, createdAt: new Date() }
		const docRef = await addDoc(collectionRef, financeData)

		return { ...financeData, id: docRef.id } as FinanceEntity
	}
}
