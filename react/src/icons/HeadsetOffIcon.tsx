import React from 'react';
import config from '../config';

interface HeadsetOffIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HeadsetOffIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/headset-off)
 * @see {@link https://clicons.dev/icon/headset-off}
 */
const HeadsetOffIcon = React.forwardRef<SVGSVGElement, HeadsetOffIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 2.00381L22 21.9589'
    }
  ],
  [
    'path',
    {
      d: 'M21 13.9769C21 11.7727 19.2091 9.98584 17 9.98584C16.2532 9.98584 15.602 10.3942 15.2585 10.9995M15 14.9746V15.9724C15 17.0745 15.8954 17.9679 17 17.9679C17.309 17.9679 17.6098 17.9329 17.8987 17.8668'
    }
  ],
  [
    'path',
    {
      d: 'M5.90819 10.1366C4.22974 10.6107 3 12.1506 3 13.9772C3 16.1813 4.79086 17.9682 7 17.9682C8.10457 17.9682 9 17.0747 9 15.9727V13.2215'
    }
  ],
  [
    'path',
    {
      d: 'M2.99116 13.9907C2.99116 12.9804 2.35632 8.16448 5.16685 5.15686M21.0138 16.7063V11.1022C21.0138 10.1123 20.9066 9.11863 20.5958 8.17862C20.3281 7.36912 19.9888 6.61881 19.3344 5.69393C15.552 0.905123 10.3682 1.58857 7.47429 3.22249M20.3065 20.2693C19.9571 20.8903 19.391 21.333 18.7069 21.6167C18.0006 21.9095 17.4337 21.9423 16.5713 21.9901C14.9707 21.9901 13.2333 22.0093 12.0548 21.9901'
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

HeadsetOffIcon.displayName = 'HeadsetOffIcon';
export default HeadsetOffIcon;
