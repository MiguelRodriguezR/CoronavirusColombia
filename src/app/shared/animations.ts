import {animate, state, style, transition, trigger} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  state('open', style({
    opacity: '*',
    transform: 'translateX(0)',
  })),
  state('closed', style({
    opacity: '0',
    transform: 'translateX(-50px)',
  })),
  transition('open => closed', [
    animate('0.2s ease-out')
  ]),
  transition('closed => open', [
    animate('0.2s ease-in')
  ]),
]);

// export const fadeAnimation = trigger('fadeAnimation', [
//   state('open', style({
//     overflow: 'visible',
//     height: '*',
//   })),
//   state('closed', style({
//     overflow: 'hidden',
//     height: '0px',
//   })),
//   transition('open => closed', [
//     animate('0.2s ease-out')
//   ]),
//   transition('closed => open', [
//     animate('0.2s ease-in')
//   ]),
// ]);
