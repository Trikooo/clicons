import React from 'react';
import config from '../config';

interface Bitcoin2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Bitcoin2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bitcoin2)
 * @see {@link https://clicons.dev/icon/bitcoin2}
 */
const Bitcoin2Icon = React.forwardRef<SVGSVGElement, Bitcoin2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 7.99976C8.13401 7.99976 5 11.1338 5 14.9998C5 18.8657 8.13401 21.9998 12 21.9998C15.866 21.9998 19 18.8657 19 14.9998C19 11.1338 15.866 7.99976 12 7.99976Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 2.74988V5.49988M11.25 2.74988C11.25 3.16409 11.5858 3.49988 12 3.49988C12.4142 3.49988 12.75 3.16409 12.75 2.74988C12.75 2.33566 12.4142 1.99988 12 1.99988C11.5858 1.99988 11.25 2.33566 11.25 2.74988Z'
    }
  ],
  [
    'path',
    {
      d: 'M5.75 2.74988V5.49988L7 6.49988M5 2.74988C5 3.16409 5.33579 3.49988 5.75 3.49988C6.16421 3.49988 6.5 3.16409 6.5 2.74988C6.5 2.33566 6.16421 1.99988 5.75 1.99988C5.33579 1.99988 5 2.33566 5 2.74988Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.25 2.74988V5.49988L17 6.49988M19 2.74988C19 3.16409 18.6642 3.49988 18.25 3.49988C17.8358 3.49988 17.5 3.16409 17.5 2.74988C17.5 2.33566 17.8358 1.99988 18.25 1.99988C18.6642 1.99988 19 2.33566 19 2.74988Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.4375 17.6667L10.4375 12.3333M12 12.3333V11M12 19V17.6667M10.4375 15H13.5625M13.5625 15C14.0803 15 14.5 15.4477 14.5 16V16.6667C14.5 17.219 14.0803 17.6667 13.5625 17.6667H9.5M13.5625 15C14.0803 15 14.5 14.5523 14.5 14V13.3333C14.5 12.781 14.0803 12.3333 13.5625 12.3333H9.5'
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

Bitcoin2Icon.displayName = 'Bitcoin2Icon';
export default Bitcoin2Icon;
