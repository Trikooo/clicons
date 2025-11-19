import React from 'react';
import config from '../config';

interface KickstarterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KickstarterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/kickstarter)
 * @see {@link https://clicons.dev/icon/kickstarter}
 */
const KickstarterIcon = React.forwardRef<SVGSVGElement, KickstarterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 5.7V18.3C4 19.7912 5.3432 21 7.00012 21C8.65705 21 10.0002 19.7912 10.0002 18.3L10.0008 14.0117L14.5421 19.8484C15.4924 21.0699 17.3631 21.3668 18.7204 20.5115C20.0777 19.6562 20.4075 17.9726 19.4572 16.7511L15.7606 12L19.4572 7.24889C20.4075 6.02739 20.0777 4.34382 18.7204 3.48852C17.3631 2.63322 15.4924 2.93008 14.5421 4.15157L10.0008 9.98832L10.0002 5.7C10.0002 4.20883 8.65705 3 7.00012 3C5.3432 3 4 4.20883 4 5.7Z'
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

KickstarterIcon.displayName = 'KickstarterIcon';
export default KickstarterIcon;
