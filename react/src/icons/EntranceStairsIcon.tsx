import React from 'react';
import config from '../config';

interface EntranceStairsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name EntranceStairsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/entrance-stairs)
 * @see {@link https://clicons.dev/icon/entrance-stairs}
 */
const EntranceStairsIcon = React.forwardRef<SVGSVGElement, EntranceStairsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667C20 19.9128 20 20.5359 19.7321 21C19.5565 21.304 19.304 21.5565 19 21.732C18.5359 22 17.9128 22 16.6667 22H7.33333C6.08718 22 5.4641 22 5 21.732C4.69596 21.5565 4.44349 21.304 4.26795 21C4 20.5359 4 19.9128 4 18.6667V10Z'
    }
  ],
  [
    'path',
    {
      d: 'M20 18H9C8.05719 18 7.58579 18 7.29289 18.2929C7 18.5858 7 19.0572 7 20V22'
    }
  ],
  [
    'path',
    {
      d: 'M20 14H13C12.0572 14 11.5858 14 11.2929 14.2929C11 14.5858 11 15.0572 11 16V18'
    }
  ],
  [
    'path',
    {
      d: 'M20 10H17C16.0572 10 15.5858 10 15.2929 10.2929C15 10.5858 15 11.0572 15 12V14'
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

EntranceStairsIcon.displayName = 'EntranceStairsIcon';
export default EntranceStairsIcon;
