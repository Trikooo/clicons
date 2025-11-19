import React from 'react';
import config from '../config';

interface RotateSquareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RotateSquareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rotate-square)
 * @see {@link https://clicons.dev/icon/rotate-square}
 */
const RotateSquareIcon = React.forwardRef<SVGSVGElement, RotateSquareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.66667 3.86984C9.998 2.62328 10.9234 2 12 2C13.4966 2 14.7009 3.20434 17.1096 5.61302L18.387 6.89042C20.7957 9.2991 22 10.5034 22 12C22 13.4966 20.7957 14.7009 18.387 17.1096L17.1096 18.387C14.7009 20.7957 13.4966 22 12 22C10.5034 22 9.2991 20.7957 6.89042 18.387L5.61302 17.1096C3.20434 14.7009 2 13.4966 2 12C2 10.8912 2.87352 9.7285 4.3058 8.22081C5.01214 7.47727 5.36531 7.1055 5.23534 6.80275C5.10536 6.5 4.59884 6.5 3.58579 6.5H2.5'
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

RotateSquareIcon.displayName = 'RotateSquareIcon';
export default RotateSquareIcon;
