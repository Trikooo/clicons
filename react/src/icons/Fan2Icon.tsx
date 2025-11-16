import React from 'react';
import config from '../config';

interface Fan2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Fan2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/fan2)
 * @see {@link https://clicons.dev/icon/fan2}
 */
const Fan2Icon = React.forwardRef<SVGSVGElement, Fan2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.57978 12.6289C8.04139 13.4886 7 15.1426 7 17.0418C7 19.1298 8.25861 20.9213 10.0525 21.687C10.754 21.9864 11.1047 22.1361 11.5524 21.837C12 21.5379 12 21.0476 12 20.067V14.4999C10.8365 14.4999 9.85868 13.7052 9.57978 12.6289Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 12H3.93298C2.95237 12 2.46206 12 2.16297 11.5524C1.86387 11.1047 2.01357 10.754 2.31298 10.0525C3.07868 8.25861 4.87018 7 6.95811 7C8.85734 7 10.5113 8.04139 11.371 9.57979C10.2948 9.85869 9.5 10.8365 9.5 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 9.5V3.93298C12 2.95237 12 2.46206 12.4476 2.16297C12.8953 1.86387 13.246 2.01357 13.9475 2.31298C15.7414 3.07868 17 4.87018 17 6.95811C17 8.85734 15.9586 10.5113 14.4202 11.371C14.1413 10.2948 13.1635 9.5 12 9.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.629 14.4202C13.7052 14.1413 14.5 13.1635 14.5 12H20.067C21.0476 12 21.5379 12 21.837 12.4476C22.1361 12.8953 21.9864 13.246 21.687 13.9475C20.9213 15.7414 19.1298 17 17.0419 17C15.1427 17 13.4887 15.9586 12.629 14.4202Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.4998 11.9993C14.4998 13.38 13.3805 14.4993 11.9998 14.4993C10.6191 14.4993 9.49979 13.38 9.49979 11.9993C9.49979 10.6186 10.6191 9.49927 11.9998 9.49927C13.3805 9.49927 14.4998 10.6186 14.4998 11.9993Z'
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

Fan2Icon.displayName = 'Fan2Icon';
export default Fan2Icon;
