import React from 'react';
import config from '../config';

interface RiceBowl2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RiceBowl2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rice-bowl2)
 * @see {@link https://clicons.dev/icon/rice-bowl2}
 */
const RiceBowl2Icon = React.forwardRef<SVGSVGElement, RiceBowl2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 9L6.73072 7.88715C8.5751 5.07821 9.4973 3.67374 10.684 3.23546C11.5341 2.92151 12.4659 2.92151 13.316 3.23546C14.5027 3.67374 15.4249 5.07821 17.2693 7.88714L18 8.99999'
    }
  ],
  [
    'path',
    {
      d: 'M18.7256 20.3049C17.6228 21 15.7485 21 12 21C8.25145 21 6.37718 21 5.27439 20.3049C3.97149 19.4837 3.14038 18.0526 3.01914 16.4815C2.99794 16.2067 2.98734 16.0693 2.98478 15.9194C2.98223 15.7694 2.99053 15.5762 3.00713 15.1899C3.04542 14.2991 3.26441 12.6191 4.2748 11C5.11593 12.6336 7.91891 15.1596 10.5006 17.1682M18.7256 20.3049C20.0285 19.4837 20.8596 18.0526 20.9809 16.4815C21.0021 16.2067 21.0127 16.0693 21.0152 15.9194C21.0178 15.7694 21.0095 15.5762 20.9929 15.1899C20.9546 14.2991 20.7356 12.6191 19.7252 11C18.3163 13.0751 13.6993 17.214 10.5006 17.1682M18.7256 20.3049C15.4906 20.2278 12.7105 18.8875 10.5006 17.1682'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 11.5L14.491 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.5 7C11.6667 7.33333 12.3 8 13.5 8'
    }
  ],
  [
    'path',
    {
      d: 'M10 11L9.5 11.5'
    }
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
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
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

RiceBowl2Icon.displayName = 'RiceBowl2Icon';
export default RiceBowl2Icon;
