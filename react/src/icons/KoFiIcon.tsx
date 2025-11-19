import React from 'react';
import config from '../config';

interface KoFiIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KoFiIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ko-fi)
 * @see {@link https://clicons.dev/icon/ko-fi}
 */
const KoFiIcon = React.forwardRef<SVGSVGElement, KoFiIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17 5.5H4C3.05719 5.5 2.58579 5.5 2.29289 5.79289C2 6.08579 2 6.55719 2 7.5V14.5C2 16.3856 2 17.3284 2.58579 17.9142C3.17157 18.5 4.11438 18.5 6 18.5H13C13.9319 18.5 14.3978 18.5 14.7654 18.3478C15.2554 18.1448 15.6448 17.7554 15.8478 17.2654C16 16.8978 16 16.4319 16 15.5H17C19.7614 15.5 22 13.2614 22 10.5C22 7.73858 19.7614 5.5 17 5.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 13H16V8H17C18.3807 8 19.5 9.11929 19.5 10.5C19.5 11.8807 18.3807 13 17 13Z'
    }
  ],
  [
    'path',
    {
      d: 'M5.58579 9.10051C6.36683 8.29983 7.63317 8.29983 8.41421 9.10051L9 9.70101L9.58579 9.10051C10.3668 8.29983 11.6332 8.29983 12.4142 9.10051C13.1953 9.90118 13.1953 11.1993 12.4142 12L9 15.5L5.58579 12C4.80474 11.1993 4.80474 9.90118 5.58579 9.10051Z',
      fillRule: 'evenodd'
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

KoFiIcon.displayName = 'KoFiIcon';
export default KoFiIcon;
