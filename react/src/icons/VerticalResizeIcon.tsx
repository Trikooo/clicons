import React from 'react';
import config from '../config';

interface VerticalResizeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name VerticalResizeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/vertical-resize)
 * @see {@link https://clicons.dev/icon/vertical-resize}
 */
const VerticalResizeIcon = React.forwardRef<SVGSVGElement, VerticalResizeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 10H20'
    }
  ],
  [
    'path',
    {
      d: 'M4 14H20'
    }
  ],
  [
    'path',
    {
      d: 'M12 10V6'
    }
  ],
  [
    'path',
    {
      d: 'M11.9496 2.00017C12.9853 1.9696 15.4206 6.00844 14.9373 6.38885C14.3891 6.82022 12.7602 5.78886 12.2416 5.55656C11.9297 5.41686 11.7944 5.42069 11.4828 5.57954C10.0759 6.29675 9.37251 6.65535 9.06751 6.43595L9.06478 6.43397C8.58035 6.08047 10.9389 2.03001 11.9496 2.00017Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.0504 21.9998C11.0147 22.0304 8.57937 17.9916 9.06275 17.6112C9.61089 17.1798 11.2397 18.2111 11.7584 18.4434C12.0703 18.5831 12.2056 18.5793 12.5172 18.4205C13.9241 17.7033 14.6275 17.3446 14.9325 17.564L14.9352 17.566C15.4197 17.9195 13.0611 21.97 12.0504 21.9998Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 18V14'
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

VerticalResizeIcon.displayName = 'VerticalResizeIcon';
export default VerticalResizeIcon;
