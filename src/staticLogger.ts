import * as chalk from 'chalk';
import * as dateFormat from 'dateformat';

// import * as dateFormat from 'dateformat';

export class StaticLogger {

	static info(tag: string, msg: string, obj?: any) {
		if (obj) {
			console.info(chalk.bgGreen.black(`INFO -[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(tag)}: ${msg}`, obj);
		} else {
			console.info(chalk.bgGreen.black(`INFO -[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(tag)}: ${msg}`);
		}
	}

	static log(tag: string, msg: string, obj?: any) {
		if (obj) {
			console.log(chalk.bgBlue(`LOG  -[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(tag)}: ${msg}`, obj);
		} else {
			console.log(chalk.bgBlue(`LOG  -[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(tag)}: ${msg}`);
		}
	}

	static warn(tag: string, msg: string, obj?: any) {
		if (obj) {
			console.warn(chalk.bgYellow.black(`WARN -[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(tag)}: ${msg}`, obj);
		} else {
			console.warn(chalk.bgYellow.black(`WARN -[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(tag)}: ${msg}`);
		}
	}

	static error(tag: string, msg: string, obj?: any) {
		if (obj) {
			console.error(chalk.bgRed.black(`ERROR-[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(tag)}: ${msg}`, obj);
		} else {
			console.error(chalk.bgRed.black(`ERROR-[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(tag)}: ${msg}`);
		}
	}

	static debug(tag: string, msg: string, obj?: any) {
		if (obj) {
			console.debug(chalk.bgYellow.black(`DEBUG-[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(tag)}: ${msg}`, obj);
		} else {
			console.debug(chalk.bgYellow.black(`DEBUG-[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(tag)}: ${msg}`);
		}
	}

}
