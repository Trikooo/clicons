import React from 'react';
import config from '../config';

interface CursorDisabledIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CursorDisabledIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cursor-disabled)
 * @see {@link https://clicons.dev/icon/cursor-disabled}
 */
const CursorDisabledIcon = React.forwardRef<SVGSVGElement, CursorDisabledIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.1716 8.82843C13.7337 10.3905 16.2663 10.3905 17.8284 8.82843C19.3905 7.26633 19.3905 4.73367 17.8284 3.17157M12.1716 8.82843C10.6095 7.26633 10.6095 4.73367 12.1716 3.17157C13.7337 1.60948 16.2663 1.60948 17.8284 3.17157M12.1716 8.82843L17.8284 3.17157'
    }
  ],
  [
    'path',
    {
      d: 'M9.53243 2.96877C8.52397 2.15003 7.79812 1.80456 7.04807 2.10979C5.94481 2.55876 5.85017 3.98379 5.67232 6.66186L5.10772 14.3857C4.9732 16.2065 4.90595 17.1169 5.26831 17.574C5.51701 17.8877 5.88085 18.0871 6.27745 18.1269C6.85532 18.1851 7.57763 17.6337 9.02224 16.5308C9.63074 16.0663 9.93499 15.834 10.239 15.8187C10.4503 15.8081 10.6595 15.8662 10.8355 15.9844C11.0887 16.1545 11.2317 16.5111 11.5177 17.2241L13.0004 20.9204C13.1717 21.3475 13.2574 21.561 13.3939 21.7015C13.5778 21.8907 13.8292 21.9982 14.0921 22C14.2873 22.0013 14.4993 21.915 14.9232 21.7425C15.3471 21.57 15.5591 21.4837 15.6986 21.3462C15.8865 21.161 15.9932 20.9078 15.995 20.6429C15.9963 20.4464 15.9107 20.2328 15.7394 19.8058L14.2567 16.1095C13.9707 15.3964 13.8277 15.0399 13.8925 14.7404C13.9376 14.5321 14.0479 14.344 14.2073 14.2038C14.4365 14.0021 14.8156 13.9563 15.5737 13.8647C17.3734 13.6473 18.2733 13.5385 18.6489 13.0924C18.9067 12.7862 19.0309 12.3882 18.9934 11.9885C18.9692 11.7299 18.8224 11.4662 18.5481 11.1466'
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

CursorDisabledIcon.displayName = 'CursorDisabledIcon';
export default CursorDisabledIcon;
