import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { DemoViewModel } from './main-view-model';

export function navigatingTo(args: EventData) {
  const page = args.object as Page;
  page.bindingContext = new DemoViewModel();
}
