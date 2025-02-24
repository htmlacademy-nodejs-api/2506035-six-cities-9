import { Command } from './command.interface.js';
import chalk from 'chalk';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
        ${chalk.green('Программа для подготовки данных для REST API сервера.')}
        ${chalk.bgRed('Пример:')}
            cli.js --<command> [--arguments]
        ${chalk.bgRed('Команды:')}
            ${chalk.bold.yellow('--version')}                    # выводит номер версии
            ${chalk.bold.yellow('--help')}                       # печатает этот текст
            ${chalk.bold.yellow('--import <path>:')}             # импортирует данные из TSV
            ${chalk.bold.yellow('--generate <n> <path> <url>')}  # генерирует произвольное количество тестовых данных
    `);
  }
}
