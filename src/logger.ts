import * as chalk from 'chalk';
import * as dateFormat from 'dateformat';
// import * as dateFormat from 'dateformat';

export enum LoggerSeverity {
  Error = 0,
  Warning = 1,
  Log = 2,
  Info = 3,
  Debug = 4,
}

export interface LoggerOptions {
	isActive?: boolean;
	severity?: LoggerSeverity;
}

export class Logger {

	private TAG: string;
	private _isActive: boolean;
	private _severity: LoggerSeverity;

	constructor(tag: string, options?: LoggerOptions) {
		this.TAG = tag;
		this._isActive = true;
		this._severity = LoggerSeverity.Debug;

		if (options) {
			this._isActive = (options.isActive !== undefined) ? options.isActive : true;
			this._severity = (options.severity) ? options.severity : LoggerSeverity.Debug;
		}
	}

	set(on: boolean) {
		this._isActive = on;
	}

	setSeverity(loggerSeverity: LoggerSeverity) {
		this._severity = loggerSeverity;
	}

	setTag(tag: string) {
		this.TAG = tag;
	}

	debug(msg: string, obj?: any) {
		if (!this._isActive || this._severity < LoggerSeverity.Debug) return;
		if (obj) {
			// tslint:disable-next-line:max-line-length
			console.debug(chalk.bgYellow.black(`DEBUG-[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(this.TAG)}: ${msg}`, obj);
		} else {
			console.debug(chalk.bgYellow.black(`DEBUG-[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(this.TAG)}: ${msg}`);
		}
	}

	info(msg: string, obj?: any) {
		if (!this._isActive || this._severity < LoggerSeverity.Info) return;
		if (obj) {
			// tslint:disable-next-line:max-line-length
			console.info(chalk.bgGreen.black(`INFO -[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(this.TAG)}: ${msg}`, obj);
		} else {
			console.info(chalk.bgGreen.black(`INFO -[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(this.TAG)}: ${msg}`);
		}
	}

	log(msg: string, obj?: any) {
		if (!this._isActive || this._severity < LoggerSeverity.Log) return;
		if (obj) {
			console.log(chalk.bgBlue(`LOG  -[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(this.TAG)}: ${msg}`, obj);
		} else {
			console.log(chalk.bgBlue(`LOG  -[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(this.TAG)}: ${msg}`);
		}
	}

	warn(msg: string, obj?: any) {
		if (!this._isActive || this._severity < LoggerSeverity.Warning) return;
		if (obj) {
			// tslint:disable-next-line:max-line-length
			console.warn(chalk.bgYellow.black(`WARN -[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(this.TAG)}: ${msg}`, obj);
		} else {
			console.warn(chalk.bgYellow.black(`WARN -[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(this.TAG)}: ${msg}`);
		}
	}

	error(msg: string, obj?: any) {
		if (!this._isActive || this._severity < LoggerSeverity.Error) return;
		if (obj) {
			// tslint:disable-next-line:max-line-length
			console.error(chalk.bgRed.black(`ERROR-[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(this.TAG)}: ${msg}`, obj);
		} else {
			console.error(chalk.bgRed.black(`ERROR-[${dateFormat(Date.now(), 'yyyy.mm.dd hh:MM:ss')}]`), `- ${chalk.inverse(this.TAG)}: ${msg}`);
		}
	}

}
