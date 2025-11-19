import React from 'react';
import config from '../config';

interface HorizontalResizeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HorizontalResizeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/horizontal-resize)
 * @see {@link https://clicons.dev/icon/horizontal-resize}
 */
const HorizontalResizeIcon = React.forwardRef<SVGSVGElement, HorizontalResizeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10 20L10 4'
    }
  ],
  [
    'path',
    {
      d: 'M14 20L14 4'
    }
  ],
  [
    'path',
    {
      d: 'M10 12L6 12'
    }
  ],
  [
    'path',
    {
      d: 'M2.00017 12.0504C1.9696 11.0147 6.00844 8.57937 6.38885 9.06275C6.82022 9.61089 5.78886 11.2397 5.55656 11.7584C5.41686 12.0703 5.42069 12.2056 5.57954 12.5172C6.29675 13.9241 6.65535 14.6275 6.43595 14.9325L6.43397 14.9352C6.08047 15.4197 2.03001 13.0611 2.00017 12.0504Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.9998 11.9496C22.0304 12.9853 17.9916 15.4206 17.6112 14.9373C17.1798 14.3891 18.2111 12.7602 18.4434 12.2416C18.5831 11.9297 18.5793 11.7944 18.4205 11.4828C17.7033 10.0759 17.3446 9.37251 17.564 9.06751L17.566 9.06478C17.9195 8.58035 21.97 10.9389 21.9998 11.9496Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 12L14 12'
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

HorizontalResizeIcon.displayName = 'HorizontalResizeIcon';
export default HorizontalResizeIcon;
