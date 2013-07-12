/**
 * This is alternative phonetic layout for Armenian language (hy, arm, hye). 
 * Based on Armenian phonetic layout, it improves few things, by placing ր under latin r, 
 * as ր is much more frequent in Armenian. ռ goes under 8, where ր is in standart phonetic.
 * Another change, which is not yet in xkb, ( as of July 2013), is swapping ֆ and թ: Ֆ is 
 * placed under F, where left index finger is, but is the least used letter in Armenian, 
 * so much more used թ takes it place, comming down from 2.
 *
 * This layout complies with Unicode 6.1, including all valid Armenian punctuation signs, 
 * mijaket (outside of main Armenian Unicode range) and Dram (AMD) sign. 
 * Please, double-check with Unicode before making any changes here.
 *   
 * Layout supports extended keys, with AltGr (Alt or Alt+Ctrl on some systems) + key, 
 * producing digits and punctuation marks from standard US keyboard layout.
 */

( function ( $ ) {
	'use strict';

	var hyEphonetic = {
		id: 'hy-ephoneticalt',
		name: 'Հայերեն Հնչյունային (R->Ր, F->Թ)',
		description: 'Eastern Armenian alternative phonetic keyboard layout',
		date: '2013-07-08',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Aleksey Chalabyan Ալեքսեյ Չալաբյան a.k.a Xelgen',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['1', 'է'],
			['\\!', 'Է'],
			['2', 'ֆ'],
			['\\@', 'Ֆ'],
			['3', 'փ'],
			['\\#', 'Փ'],
			['4', 'ձ'],
			['\\$', 'Ձ'],
			['5', 'ջ'],
			['\\%', 'Ջ'],
			['6', '֏'],
			['\\^', '\('],
			['7', 'և'],
			['\\&', '\)'],
			['8', 'ռ'],
			['\\*', 'Ռ'],
			['9', 'չ'],
			['\\(', 'Չ'],
			['0', 'ճ'],
			['\\)', 'Ճ'],
			['\\-', '–'],
			['\\_', '—'],
			['\\=', 'ժ'],
			['\\+', 'Ժ'],
			['\\`', '՝'],
			['\\~', '՜'],
			['q', 'ք'],
			['Q', 'Ք'],
			['w', 'ո'],
			['W', 'Ո'],
			['e', 'ե'],
			['E', 'Ե'],
			['r', 'ր'],
			['R', 'Ր'],
			['t', 'տ'],
			['T', 'Տ'],
			['y', 'ը'],
			['Y', 'Ը'],
			['u', 'ւ'],
			['U', 'Ւ'],
			['i', 'ի'],
			['I', 'Ի'],
			['o', 'օ'],
			['O', 'Օ'],
			['p', 'պ'],
			['P', 'Պ'],
			['\\[', 'խ'],
			['\\{', 'Խ'],
			['\\]', 'ծ'],
			['\\}', 'Ծ'],
			['\\\\', 'շ'],
			['\\|', 'Շ'],
			['a', 'ա'],
			['A', 'Ա'],
			['s', 'ս'],
			['S', 'Ս'],
			['d', 'դ'],
			['D', 'Դ'],
			['f', 'թ'],
			['F', 'Թ'],
			['g', 'գ'],
			['G', 'Գ'],
			['h', 'հ'],
			['H', 'Հ'],
			['j', 'յ'],
			['J', 'Յ'],
			['k', 'կ'],
			['K', 'Կ'],
			['l', 'լ'],
			['L', 'Լ'],
			[';', ';'],
			[':', '։'],
			['\'', '՛'],
			['\"', '"'],
			['z', 'զ'],
			['Z', 'Զ'],
			['x', 'ղ'],
			['X', 'Ղ'],
			['c', 'ց'],
			['C', 'Ց'],
			['v', 'վ'],
			['V', 'Վ'],
			['b', 'բ'],
			['B', 'Բ'],
			['n', 'ն'],
			['N', 'Ն'],
			['m', 'մ'],
			['M', 'Մ'],
			[',', ','],
			['\\<', '«'],
			['\\.', '․'],
			['\\>', '»'],
			['/', '…'],
			['\\?', '՞']
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

	$.ime.register( hyEphonetic );

}( jQuery ) );
