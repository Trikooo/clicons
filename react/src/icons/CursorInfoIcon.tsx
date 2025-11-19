import React from 'react';
import config from '../config';

interface CursorInfoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CursorInfoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cursor-info)
 * @see {@link https://clicons.dev/icon/cursor-info}
 */
const CursorInfoIcon = React.forwardRef<SVGSVGElement, CursorInfoIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 9.99001V10M13 3.99762C13 2.89437 13.8954 2 15 2C16.1046 2 17 2.89437 17 3.99762C17 4.5747 16.755 5.09463 16.3632 5.4593C15.7572 6.02343 15 6.66601 15 7.49346'
    }
  ],
  [
    'path',
    {
      d: 'M9.90736 3.28292C8.69745 2.24209 7.88793 1.76801 7.04807 2.10979C5.94481 2.55876 5.85017 3.98379 5.67232 6.66186L5.10772 14.3857C4.9732 16.2065 4.90595 17.1169 5.26831 17.574C5.51701 17.8877 5.88085 18.0871 6.27746 18.1269C6.85532 18.1851 7.57763 17.6337 9.02224 16.5308C9.63074 16.0663 9.935 15.834 10.239 15.8187C10.4503 15.8081 10.6595 15.8662 10.8355 15.9844C11.0887 16.1545 11.2317 16.5111 11.5177 17.2241L13.0004 20.9204C13.1717 21.3475 13.2574 21.561 13.3939 21.7015C13.5778 21.8907 13.8292 21.9982 14.0921 22C14.2873 22.0013 14.4993 21.915 14.9232 21.7425C15.3471 21.57 15.5591 21.4837 15.6986 21.3462C15.8865 21.1609 15.9932 20.9078 15.995 20.6429C15.9963 20.4464 15.9107 20.2328 15.7394 19.8058L14.2567 16.1095C13.9707 15.3964 13.8277 15.0399 13.8925 14.7404C13.9376 14.5321 14.0479 14.344 14.2073 14.2038C14.4365 14.0021 14.8156 13.9563 15.5737 13.8647C17.3734 13.6473 18.2733 13.5385 18.6489 13.0924C18.9067 12.7862 19.0309 12.3882 18.9934 11.9885C18.9563 11.592 18.6309 11.1836 18 10.5796'
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

CursorInfoIcon.displayName = 'CursorInfoIcon';
export default CursorInfoIcon;
