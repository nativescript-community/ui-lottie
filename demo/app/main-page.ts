import { EventData } from '@nativescript/core/data/observable';
import { Page } from '@nativescript/core/ui/page';
import { DemoViewModel } from './main-view-model';

export function navigatingTo(args: EventData) {
  const page = args.object as Page;
  page.bindingContext = new DemoViewModel();
}
