import React from 'react';
import config from '../config';

interface TestTube3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TestTube3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/test-tube3)
 * @see {@link https://clicons.dev/icon/test-tube3}
 */
const TestTube3Icon = React.forwardRef<SVGSVGElement, TestTube3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.0155 2.00177H15.975'
    }
  ],
  [
    'path',
    {
      d: 'M5.53308 11.1499C5.53308 11.1499 8.53308 10.224 11.0331 13.0015M18.5331 11.6128C18.5331 11.6128 17.9215 12.592 17.0331 13.0017'
    }
  ],
  [
    'path',
    {
      d: 'M10.0331 18.0037L10.0418 18.0013'
    }
  ],
  [
    'path',
    {
      d: 'M14.0331 14.0037L14.0418 14.0013'
    }
  ],
  [
    'path',
    {
      d: 'M9.52681 2.21466V6.25726C9.52681 6.91922 9.17507 7.49 8.59392 7.80145C5.60873 9.40126 2.80483 13.9338 5.74597 18.5791C6.40428 19.7186 8.57672 21.9977 12 21.9977C15.4232 21.9977 17.5956 19.7186 18.2539 18.5791C21.1951 13.9338 18.3912 9.40126 15.406 7.80145C14.8248 7.49 14.4724 6.91922 14.4724 6.25726V2.26344'
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

TestTube3Icon.displayName = 'TestTube3Icon';
export default TestTube3Icon;
