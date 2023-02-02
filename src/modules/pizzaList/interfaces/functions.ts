import { ActionCreatorWithPayload } from "@reduxjs/toolkit/dist/createAction";
import { AsyncThunkAction } from "@reduxjs/toolkit/dist/createAsyncThunk";

interface ReducerFunction extends ActionCreatorWithPayload<any, string> {
  (arg: any): any;
}

// Можно будет расширить
interface AsyncFunction extends AsyncThunkAction<any, string, any> {
  (arg: any): any;
}

type ReduxFunctions = ReducerFunction | AsyncFunction;

/* Параметры для функции, которые позволены на данном этапе проектирования для колбеков, 
приходящих для функций высшего порядка, которые работают со стором */
type HighOrderFunctionForStoreCallbacks = ReduxFunctions | any;

type OutsideHighOrderFunctionForStoreCallbacks = ReduxFunctions;

// Функция высшего порядка общего вида
type HighOrderFunction<T> = (...callback: T[]) => any;

// Семантически странноватая запись, функции данного типа работают со стором
// Пока что здесь есть any, но по ходу дальнейшего проектирования это можно будет ограничить
export type HighOrderFunctionForStore = HighOrderFunction<
  HighOrderFunctionForStoreCallbacks | any
>;

/* Это тип функции, которая работает с колбеками извне для работы со стором
Контракт ограничивает нас от передачи чего-то лишнего, делая разработку строже,
А еще подразумевается, что модули не должны работать друг с другом
И данным интерфейсом я ограничиваю нарастание dead dependencies */
export type OutsideHighOrderFunctionForStore =
  HighOrderFunction<OutsideHighOrderFunctionForStoreCallbacks>;
