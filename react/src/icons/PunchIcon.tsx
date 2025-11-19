import React from 'react';
import config from '../config';

interface PunchIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PunchIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/punch)
 * @see {@link https://clicons.dev/icon/punch}
 */
const PunchIcon = React.forwardRef<SVGSVGElement, PunchIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.6 13.7821V11.5M6.6 13.7821C6.6 14.7644 5.79411 15.5607 4.8 15.5607C3.80589 15.5607 3 14.7644 3 13.7821V13C3 9.25027 3 7.3754 3.95491 6.06107C4.26331 5.6366 4.6366 5.26331 5.06107 4.95491C6.3754 4 8.25027 4 12 4C15.7497 4 17.6246 4 18.9389 4.95491C19.3634 5.26331 19.7367 5.6366 20.0451 6.06107C21 7.3754 21 9.26015 21 13.0296C21 14.5561 21 15.3193 20.8431 15.9483C20.3627 17.8739 18.8411 19.3774 16.8923 19.8521C16.4854 19.9512 15.7827 19.9869 14.9252 19.9998C14.0788 19.9998 13.35 20.0759 13.35 18.9998C13.35 17.9839 13.6769 16.8946 14.925 16.8946H15.6M6.6 13.7821V15.116C6.6 16.0983 7.40589 16.8946 8.4 16.8946C9.39411 16.8946 10.2 16.0983 10.2 15.116M10.2 15.116V11.1143M10.2 15.116V15.9123C10.2 16.8946 11.0059 17.6909 12 17.6909C12.9941 17.6909 13.8 16.8946 13.8 15.9123V15.116M17.4 11.5V15.116C17.4 16.0983 16.5941 16.8946 15.6 16.8946M13.8 15.116V11.1143M13.8 15.116C13.8 16.0983 14.6059 16.8946 15.6 16.8946'
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

PunchIcon.displayName = 'PunchIcon';
export default PunchIcon;
