/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { bank } from "../constants";

export function sortBanks(banks: bank[]) {
    const sortedBanks = banks.sort((bank1: bank, bank2: bank) => {
        // @ts-ignore
        const name1 = bank1.name;
        const name2 = bank2.name;
        return name1.localeCompare(name2, undefined, {
            numeric: true,
            sensitivity: 'base'
        })
    })
    return sortedBanks
}