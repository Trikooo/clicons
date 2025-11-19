import React from 'react';
import config from '../config';

interface SuperMarioToadIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SuperMarioToadIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/super-mario-toad)
 * @see {@link https://clicons.dev/icon/super-mario-toad}
 */
const SuperMarioToadIcon = React.forwardRef<SVGSVGElement, SuperMarioToadIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.00779 16.7056C4.97141 16.3269 5.05697 16.1715 5.38146 15.9558C9.30933 13.3451 15.6755 13.3481 18.7181 15.9646C18.9566 16.1696 19.0195 16.3169 18.9951 16.6236C18.8758 18.1215 18.471 19.8517 17.2149 20.8332C15.2211 22.3912 8.76892 22.3867 6.78076 20.8332C5.53838 19.8624 5.14963 18.182 5.00779 16.7056Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.00896 18H9M15 18H14.991'
    }
  ],
  [
    'path',
    {
      d: 'M5 18C3 17 2 14.2512 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21 17 19 18'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '7',
      r: '3'
    }
  ],
  [
    'path',
    {
      d: 'M3.36963 7C4.66856 7.31423 5.32655 8.8999 4.83928 10.5417C4.40097 12.0185 3.18529 13.0377 2 12.9989'
    }
  ],
  [
    'path',
    {
      d: 'M20.6315 7C19.3317 7.31423 18.6732 8.8999 19.1608 10.5417C19.5992 12.0177 20.8145 13.0366 22 12.999'
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

SuperMarioToadIcon.displayName = 'SuperMarioToadIcon';
export default SuperMarioToadIcon;
