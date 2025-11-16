import React from 'react';
import config from '../config';

interface AddMoneyCircleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AddMoneyCircleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/add-money-circle)
 * @see {@link https://clicons.dev/icon/add-money-circle}
 */
const AddMoneyCircleIcon = React.forwardRef<SVGSVGElement, AddMoneyCircleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 9.5H12.5C13.3284 9.5 14 10.1716 14 11M11 9.5H9.5C8.67157 9.5 8 10.1716 8 11V11.5C8 12.3284 8.67157 13 9.5 13H12.5C13.3284 13 14 13.6716 14 14.5V15C14 15.8284 13.3284 16.5 12.5 16.5H11M11 9.5V8M11 16.5H9.5C8.67157 16.5 8 15.8284 8 15M11 16.5V18'
    }
  ],
  [
    'path',
    {
      d: 'M12 4.05493C11.6717 4.01863 11.338 4 11 4C6.02944 4 2 8.02944 2 13C2 17.9705 6.02944 22 11 22C15.9705 22 20 17.9705 20 13C20 12.662 19.9814 12.3283 19.9451 12'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 2V9M22 5.5L15 5.5'
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

AddMoneyCircleIcon.displayName = 'AddMoneyCircleIcon';
export default AddMoneyCircleIcon;
