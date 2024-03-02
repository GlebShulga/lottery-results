export type BonolotoResult = {
  date: string;
  numbers: string[];
  prizes: BonolotoResultPrizes[];
};

export type BonolotoResultPrizes = {
  tipo: string;
  categoria: number;
  premio: string;
  ganadores: string;
};
