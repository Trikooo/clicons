import React from 'react';
import config from '../config';

interface StarOffIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name StarOffIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/star-off)
 * @see {@link https://clicons.dev/icon/star-off}
 */
const StarOffIcon = React.forwardRef<SVGSVGElement, StarOffIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.5038 14.5L21.1477 11.8925C22.616 10.4206 22.1366 8.92853 20.099 8.58575L16.9128 8.05143C16.3734 7.9607 15.7342 7.48687 15.4945 6.99288L13.7366 3.44418C12.7877 1.51861 11.2296 1.51861 10.2707 3.44418L9.5 5'
    }
  ],
  [
    'path',
    {
      d: 'M7.29561 7.99998C7.22668 8.02267 7.15848 8.04006 7.09201 8.05144L3.90008 8.58576C1.85885 8.92853 1.38856 10.4206 2.84945 11.8925L5.33095 14.3927C5.7512 14.8161 5.98134 15.6327 5.85126 16.2175L5.14083 19.3125C4.58049 21.7522 5.88128 22.7099 8.02257 21.4296L11.0144 19.6452C11.5647 19.3226 12.4553 19.3226 12.9956 19.6452L15.9874 21.4296C18.1387 22.7099 19.4295 21.7623 18.8691 19.3125L18.7974 19'
    }
  ],
  [
    'path',
    {
      d: 'M2 2L22 22'
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

StarOffIcon.displayName = 'StarOffIcon';
export default StarOffIcon;
