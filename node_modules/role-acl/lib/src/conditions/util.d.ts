import { TrueCondition } from './TrueCondition';
import { EqualsCondition } from './EqualsCondition';
import { NotEqualsCondition } from './NotEqualsCondition';
import { NotCondition } from './NotCondition';
import { ListContainsCondition } from './ListContainsCondition';
import { OrCondition } from './OrCondition';
import { AndCondition } from './AndCondition';
import { StartsWithCondition } from './StartsWithCondition';
import { ICondition } from '../core';
export declare class ConditionUtil {
    static readonly AND: AndCondition;
    static readonly TRUE: TrueCondition;
    static readonly EQUALS: EqualsCondition;
    static readonly LIST_CONTAINS: ListContainsCondition;
    static readonly NOT_EQUALS: NotEqualsCondition;
    static readonly NOT: NotCondition;
    static readonly OR: OrCondition;
    static readonly STARTS_WITH: StartsWithCondition;
    static evaluate(condition: ICondition, context: any): boolean | Promise<boolean>;
    static getValueByPath(context: any, valuePathOrValue: any): any;
}
