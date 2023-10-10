import {BsFileRichtext, BsGear, BsHouse} from 'react-icons/bs'

import {getFolder} from './utilities/getFolder'
import {getSingleton} from './utilities/getSingleton'

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
						type: 'homepage',
						icon: BsHouse,
					}),
				],
			}),

			S.divider(),

			getSingleton(S, {
				title: 'Site Settings',
				type: 'settings',
				icon: BsGear,
			}),
		])
