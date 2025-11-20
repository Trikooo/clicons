import React from 'react';
import config from '../config';

interface ThemeSwitcherIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ThemeSwitcherIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/theme-switcher)
 * @see {@link https://clicons.dev/icon/theme-switcher}
 */
const ThemeSwitcherIcon = React.forwardRef<SVGSVGElement, ThemeSwitcherIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'g',
    {
      clipPath: 'url(#clip0_2033_1061)'
    },
    [
      [
        'path',
        {
          d: 'M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z',
          stroke: 'black'
        }
      ],
      [
        'path',
        {
          d: 'M12 3V21',
          stroke: 'black'
        }
      ],
      [
        'path',
        {
          d: 'M12 9L17 4',
          stroke: 'black'
        }
      ],
      [
        'path',
        {
          d: 'M12 13L19 6',
          stroke: 'black'
        }
      ],
      [
        'path',
        {
          d: 'M20.3536 9.35355C20.5488 9.15829 20.5488 8.84171 20.3536 8.64645C20.1583 8.45118 19.8417 8.45118 19.6464 8.64645L20 9L20.3536 9.35355ZM12 17L12.3536 17.3536L20.3536 9.35355L20 9L19.6464 8.64645L11.6464 16.6464L12 17Z',
          fill: 'black'
        }
      ],
      [
        'path',
        {
          d: 'M12 21L21 12',
          stroke: 'black'
        }
      ]
    ]
  ],
  [
    'defs',
    {},
    [
      [
        'clipPath',
        {
          id: 'clip0_2033_1061'
        },
        [
          [
            'rect',
            {
              width: '24',
              height: '24',
              fill: 'white'
            }
          ]
        ]
      ]
    ]
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        // Mixed styling: preserve element-specific stroke/fill
        if (processedAttrs.stroke === 'currentColor') processedAttrs.stroke = finalColor;
        if (processedAttrs.fill === 'currentColor') processedAttrs.fill = finalColor;

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

ThemeSwitcherIcon.displayName = 'ThemeSwitcherIcon';
export default ThemeSwitcherIcon;
