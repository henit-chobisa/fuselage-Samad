import { ActionElement } from './ActionElement';
import { ElementType } from './ElementType';
import { IBlock } from './IBlock';

export interface IActionsBlock extends IBlock {
  type: ElementType.ACTIONS;
  elements: ActionElement[];
}

// export interface IActionsBlock extends IBlock {
//   type: BlockType.ACTIONS;
//   elements: Array<IBlockElement>;
// }