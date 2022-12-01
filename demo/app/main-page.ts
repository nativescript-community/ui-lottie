import { EventData, Page } from '@nativescript/core';
import { DemoViewModel } from './main-view-model';

export function navigatingTo(args: EventData) {
  const page = args.object as Page;
  page.bindingContext = new DemoViewModel();
}
