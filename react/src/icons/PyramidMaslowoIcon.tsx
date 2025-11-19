import React from 'react';
import config from '../config';

interface PyramidMaslowoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PyramidMaslowoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pyramid-maslowo)
 * @see {@link https://clicons.dev/icon/pyramid-maslowo}
 */
const PyramidMaslowoIcon = React.forwardRef<SVGSVGElement, PyramidMaslowoIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.75024 7.56659C9.66926 4.5222 10.6288 3 12 3C13.3712 3 14.3307 4.52219 16.2498 7.56658L18.4941 11.1271C21.2362 15.4772 22.6072 17.6522 21.7426 19.3261C20.878 21 18.3834 21 13.3944 21H10.6056C5.61655 21 3.12205 21 2.25742 19.3261C1.3928 17.6522 2.76382 15.4772 5.50587 11.1271L7.75024 7.56659Z'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 15H9M20.5 15H15M7 9H17'
    }
  ],
  [
    'path',
    {
      d: 'M12 9L12 21'
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

PyramidMaslowoIcon.displayName = 'PyramidMaslowoIcon';
export default PyramidMaslowoIcon;
