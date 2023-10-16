import { Component, Input } from '@angular/core';
import { Topic } from '../rnd-topic-item/rnd-topic-item.component';

@Component({
  selector: 'app-rnd-topics',
  templateUrl: './rnd-topics.component.html',
  styleUrls: ['./rnd-topics.component.scss'],
})
export class RndTopicsComponent {
  topics: Topic[] = [
    {
      name: '_1',
      options: {
        css: {},
        showChild: false,
      },
      child: [
        {
          name: '_11',
          options: {
            css: {},
            showChild: false,
          },
          child: [
            {
              name: '_111',
              options: {
                css: {},
                showChild: false,
              },
              child: [],
            },
            {
              name: '_112',
              options: {
                css: {},
                showChild: false,
              },
              child: [
                {
                  name: '_1121',
                  options: {
                    css: {},
                    showChild: false,
                  },
                  child: [],
                },
                {
                  name: '_1122',
                  options: {
                    css: {},
                    showChild: false,
                  },
                  child: [],
                },
                {
                  name: '_1123',
                  options: {
                    css: {},
                    showChild: false,
                  },
                  child: [],
                },
              ],
            },
          ],
        },
        {
          name: '_12',
          options: {
            css: {},
            showChild: false,
          },
          child: [
            {
              name: '_121',
              options: {
                css: {},
                showChild: false,
              },
              child: [],
            },
            {
              name: '_122',
              options: {
                css: {},
                showChild: false,
              },
              child: [],
            },
          ],
        },
        {
          name: '_13',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
      ],
    },
    {
      name: '_2',
      options: {
        css: {},
        showChild: false,
      },
      child: [
        {
          name: '_21',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
        {
          name: '_22',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
        {
          name: '_23',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
        {
          name: '_24',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
        {
          name: '_25',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
        {
          name: '_26',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
      ],
    },
    {
      name: '_3',
      options: {
        css: {},
        showChild: false,
      },
      child: [
        {
          name: '_31',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
        {
          name: '_32',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
        {
          name: '_33',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
        {
          name: '_34',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
        {
          name: '_35',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
        {
          name: '_36',
          options: {
            css: {},
            showChild: false,
          },
          child: [],
        },
      ],
    },
  ];

  manageShowChild() {}
}
