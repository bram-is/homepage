import {BsFileEarmark, BsFileRichtext, BsGear, BsHouse, BsRecordCircleFill} from 'react-icons/bs'

import {getFolder} from './utilities/getFolder'
import {getSingleton} from './utilities/getSingleton'
import {getDocumentList} from './utilities/getDocumentList'

export default (S: any) =>
	S.list()
		.title('Content')
		.items([
			getFolder(S, {
				title: 'Pagina’s',
				icon: BsFileRichtext,
				items: [
					getSingleton(S, {
						title: 'Homepage',
						type: 'page-home',
						icon: BsHouse,
					}),
					getDocumentList(S, {
						title: 'Record',
						type: 'page-record',
						icon: BsRecordCircleFill,
					}),
				],
			}),

			// getFolder(S, {
			// 	title: 'Documents',
			// 	icon: BsFileEarmark,
			// 	items: [

			// 	],
			// }),

			S.divider(),

			getSingleton(S, {
				title: 'Site Settings',
				type: 'settings',
				icon: BsGear,
			}),
		])
