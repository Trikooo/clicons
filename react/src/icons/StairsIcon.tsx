import React from 'react';
import config from '../config';

interface StairsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name StairsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/stairs)
 * @see {@link https://clicons.dev/icon/stairs}
 */
const StairsIcon = React.forwardRef<SVGSVGElement, StairsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.5 3.5H18.5C19.4428 3.5 19.9142 3.5 20.2071 3.79289C20.5 4.08579 20.5 4.55719 20.5 5.5V16.5C20.5 18.3856 20.5 19.3284 19.9142 19.9142C19.3284 20.5 18.3856 20.5 16.5 20.5H5.5C4.55719 20.5 4.08579 20.5 3.79289 20.2071C3.5 19.9142 3.5 19.4428 3.5 18.5V17.5C3.5 16.5572 3.5 16.0858 3.79289 15.7929C4.08579 15.5 4.55719 15.5 5.5 15.5H7.5V13.5C7.5 12.5572 7.5 12.0858 7.79289 11.7929C8.08579 11.5 8.55719 11.5 9.5 11.5H11.5V9.5C11.5 8.55719 11.5 8.08579 11.7929 7.79289C12.0858 7.5 12.5572 7.5 13.5 7.5H15.5V5.5C15.5 4.55719 15.5 4.08579 15.7929 3.79289C16.0858 3.5 16.5572 3.5 17.5 3.5Z'
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

StairsIcon.displayName = 'StairsIcon';
export default StairsIcon;
