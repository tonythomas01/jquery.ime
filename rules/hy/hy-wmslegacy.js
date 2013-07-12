/**
 * Western Armenian phonetic layout introduced by Microsoft in Windows 2000 and depreceated in Windows 8.
 * Original layout was created in late 90-ies based on Unicode 3, and was never updated since release,
 * causing it to be incompatible with Unicode.
 *
 * This layout version complies with Unicode 6.1, including all valid Armenian punctuation signs, 
 * mijaket (outside of main Armenian Unicode range) and Dram (AMD) sign under USD sign (Shift + 4). 
 * Please, double-check with Unicode before making any changes here.
 *   
 * Layout supports extended keys, with AltGr (Alt or Alt+Ctrl on some systems) + key, 
 * producing digits and punctuation marks from standard US keyboard layout.
 */

( function ( $ ) {
	'use strict';

	var hyWmslegacy = {
		id: 'hy-wmslegacy',
		name: 'ՄՍ Արևմտահայերեն (հնացած)',
		description: 'Legacy keyboard layout for Western Armenian by Microsoft',
		date: '2013-07-08',
		URL: 'http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdarmw.html',
		author: 'Aleksey Chalabyan Ալեքսեյ Չալաբյան a.k.a Xelgen',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['1', '։'],
			['\\!', '1'],
			['2', 'ձ'],
			['\\@', 'Ձ'],
			['3', 'յ'],
			['\\#', 'Յ'],
			['4', '՛'],
			['\\$', '֏'],
			['5', ','],
			['\\%', '4'],
			['6', '-'],
			['\\^', '9'],
			['7', '․'],
			['\\&', 'և'],
			['8', '«'],
			['\\*', '\('],
			['9', '»'],
			['\\(', '\)'],
			['0', 'օ'],
			['\\)', 'Օ'],
			['\\-', 'ռ'],
			['\\_', 'Ռ'],
			['\\=', 'ժ'],
			['\\+', 'Ժ'],
			['\\`', '՝'],
			['\\~', '՜'],
			['q', 'խ'],
			['Q', 'Խ'],
			['w', 'վ'],
			['W', 'Վ'],
			['e', 'է'],
			['E', 'Է'],
			['r', 'ր'],
			['R', 'Ր'],
			['t', 'դ'],
			['T', 'Դ'],
			['y', 'ե'],
			['Y', 'Ե'],
			['u', 'ը'],
			['U', 'Ը'],
			['i', 'ի'],
			['I', 'Ի'],
			['o', 'ո'],
			['O', 'Ո'],
			['p', 'բ'],
			['P', 'Բ'],
			['\\[', 'չ'],
			['\\{', 'Չ'],
			['\\]', 'ջ'],
			['\\}', 'Ջ'],
			['\\\\', '\''],
			['\\|', '՞'],
			['a', 'ա'],
			['A', 'Ա'],
			['s', 'ս'],
			['S', 'Ս'],
			['d', 'տ'],
			['D', 'Տ'],
			['f', 'ֆ'],
			['F', 'Ֆ'],
			['g', 'կ'],
			['G', 'Կ'],
			['h', 'հ'],
			['H', 'Հ'],
			['j', 'ճ'],
			['J', 'Ճ'],
			['k', 'ք'],
			['K', 'Ք'],
			['l', 'լ'],
			['L', 'Լ'],
			[';', 'թ'],
			[':', 'Թ'],
			['\'', 'փ'],
			['\"', 'Փ'],
			['z', 'զ'],
			['Z', 'Զ'],
			['x', 'ց'],
			['X', 'Ց'],
			['c', 'գ'],
			['C', 'Գ'],
			['v', 'ւ'],
			['V', 'Ւ'],
			['b', 'պ'],
			['B', 'Պ'],
			['n', 'ն'],
			['N', 'Ն'],
			['m', 'մ'],
			['M', 'Մ'],
			[',', 'շ'],
			['\\<', 'Շ'],
			['\\.', 'ղ'],
			['\\>', 'Ղ'],
			['/', 'ծ'],
			['\\?', 'Ծ']
		],
		patterns_x: [
			['1', '1'],
			['\\!', '\!'],
			['2', '2'],
			['\\@', '\@'],
			['3', '3'],
			['\\#', '\#'],
			['4', '4'],
			['\\$', '\$'],
			['5', '5'],
			['\\%', '\%'],
			['6', '6'],
			['\\^', '\^'],
			['7', '7'],
			['\\&', '\&'],
			['8', '8'],
			['\\*', '\*'],
			['9', '9'],
			['\\(', '\('],
			['0', '0'],
			['\\)', '\)'],
			['\\-', '\-'],
			['\\_', '\_'],
			['\\=', '\='],
			['\\+', '\+'],
			['\\`', '\`'],
			['\\~', '\~'],			
			['\\[', '\['],
			['\\{', '\{'],
			['\\]', '\]'],
			['\\}', '\}'],
			['\\\\', '\\'],
			['\\|', '\|'],			
			[';', ';'],
			['\\:', '\:'],
			['\'', '\''],
			['\"', '\"'],			
			['\\<', '\<'],
			['\\.', '\.'],
			['\\>', '\>'],
			['/', '/'],
			['\\?', '\?']
		]
	};

	$.ime.register( hyWmslegacy );

}( jQuery ) );
