import React from 'react';
import config from '../config';

interface RubElHizbIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RubElHizbIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rub-el-hizb)
 * @see {@link https://clicons.dev/icon/rub-el-hizb}
 */
const RubElHizbIcon = React.forwardRef<SVGSVGElement, RubElHizbIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5 6.64286C5 5.6327 5 5.12763 5.31381 4.81381C5.62763 4.5 6.1327 4.5 7.14286 4.5H17.8571C18.8673 4.5 19.3724 4.5 19.6862 4.81381C20 5.12763 20 5.6327 20 6.64286V17.3571C20 18.3673 20 18.8724 19.6862 19.1862C19.3724 19.5 18.8673 19.5 17.8571 19.5H7.14286C6.1327 19.5 5.62763 19.5 5.31381 19.1862C5 18.8724 5 18.3673 5 17.3571V6.64286Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.009 3.05426C11.7119 2.35142 12.0633 2 12.5 2C12.9367 2 13.2881 2.35142 13.991 3.05427L21.4457 10.509C22.1486 11.2119 22.5 11.5633 22.5 12C22.5 12.4367 22.1486 12.7881 21.4457 13.491L13.991 20.9457C13.2881 21.6486 12.9367 22 12.5 22C12.0633 22 11.7119 21.6486 11.009 20.9457L3.55426 13.491C2.85142 12.7881 2.5 12.4367 2.5 12C2.5 11.5633 2.85142 11.2119 3.55427 10.509L11.009 3.05426Z'
    }
  ],
  [
    'circle',
    {
      cx: '12.5',
      cy: '12',
      r: '2'
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

RubElHizbIcon.displayName = 'RubElHizbIcon';
export default RubElHizbIcon;
