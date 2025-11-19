import React from 'react';
import config from '../config';

interface PavilonIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PavilonIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pavilon)
 * @see {@link https://clicons.dev/icon/pavilon}
 */
const PavilonIcon = React.forwardRef<SVGSVGElement, PavilonIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 11.3338V21.5M18 11.3361V21.5M9.5 21.5L10.0065 18.4592C10.1261 17.741 10.1859 17.3819 10.3463 17.1165C10.7446 16.4571 11.3843 16.4969 12 16.4969C12.6157 16.4969 13.2554 16.4571 13.6537 17.1165C13.8141 17.3819 13.8739 17.741 13.9935 18.4592L14.5 21.5M3 21.5H21M7.12038 11.4811C5.81567 11.4811 3.90987 10.864 3.03476 8.51048C5.33669 8.37831 10.2316 7.831 12.0044 2.5C13.8535 7.91432 18.672 8.37831 20.9739 8.51048C20.0988 10.864 18.193 11.4811 16.8883 11.4811H7.12038Z'
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

PavilonIcon.displayName = 'PavilonIcon';
export default PavilonIcon;
