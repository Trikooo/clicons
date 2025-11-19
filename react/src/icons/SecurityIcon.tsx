import React from 'react';
import config from '../config';

interface SecurityIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SecurityIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/security)
 * @see {@link https://clicons.dev/icon/security}
 */
const SecurityIcon = React.forwardRef<SVGSVGElement, SecurityIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.7088 3.49546C16.8165 2.55394 14.5009 2.00012 12 2.00012C9.4991 2.00012 7.1835 2.55394 5.29116 3.49547C4.36318 3.95718 3.89919 4.18804 3.4496 4.91391C3 5.63978 3 6.3426 3 7.74826V11.2372C3 16.9206 7.54236 20.0805 10.173 21.4339C10.9067 21.8114 11.2735 22.0001 12 22.0001C12.7265 22.0001 13.0933 21.8114 13.8269 21.4339C16.4576 20.0805 21 16.9206 21 11.2372L21 7.74827C21 6.34261 21 5.63978 20.5504 4.91391C20.1008 4.18804 19.6368 3.95718 18.7088 3.49546Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 9.00012V10.0001M11 9.50012C11 9.76534 11.1054 10.0197 11.2929 10.2072C11.4804 10.3948 11.7348 10.5001 12 10.5001C12.2652 10.5001 12.5196 10.3948 12.7071 10.2072C12.8946 10.0197 13 9.76534 13 9.50012C13 9.23491 12.8946 8.98055 12.7071 8.79302C12.5196 8.60548 12.2652 8.50012 12 8.50012C11.7348 8.50012 11.4804 8.60548 11.2929 8.79302C11.1054 8.98055 11 9.23491 11 9.50012Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.75 14.0001H11.25L12 10.5001L12.75 14.0001Z'
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

SecurityIcon.displayName = 'SecurityIcon';
export default SecurityIcon;
