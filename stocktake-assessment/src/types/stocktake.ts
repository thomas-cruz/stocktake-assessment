export interface IStocktakeItemBase {
  stockId: number;
  count?: number;
  priorQuantity: number;
}
export interface IStocktakeItem extends IStocktakeItemBase {
  stocktakeItemId: number;
  stockId: number;

  priorValue: number;
  countValue: number;
  movement: number;
  movementValue: number;
  currentQuantity: number;
  currentValue: number;

  performedByUserSub?: string;
  performedByUserName?: string;
  datePerformed?: Date;
  skippedByUserSub?: string;
  skippedByUserName?: string;
  dateSkipped?: Date;

  createdDate: Date;
  modifiedDate: Date;

  name: string;
}

export interface TableProps {
  items: IStocktakeItem[];
  setSelected: (item: IStocktakeItem) => void;
}

export interface ModalProps {
  item: IStocktakeItem;
  nextItem: IStocktakeItem | null;
  onClose: () => void;
  onSave: (i: IStocktakeItem) => void;
}