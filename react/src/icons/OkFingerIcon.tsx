import React from 'react';
import config from '../config';

interface OkFingerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name OkFingerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ok-finger)
 * @see {@link https://clicons.dev/icon/ok-finger}
 */
const OkFingerIcon = React.forwardRef<SVGSVGElement, OkFingerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.375 22V20.7166C6.375 19.6817 6.1378 18.6609 5.68218 17.7352L5.39077 17.1432C4.80497 15.953 4.5 14.6406 4.5 13.3099V8.19048C4.5 7.4015 5.1296 6.76191 5.90625 6.76191C6.6829 6.76191 7.3125 7.4015 7.3125 8.19048M14.8125 22C14.8125 21.5674 14.8117 21.1365 14.8125 20.7212C14.8146 19.5775 16.0083 18.9963 16.9844 18.4266C18.0998 17.7757 18.9943 16.7254 19.4068 15.4608C19.678 14.6293 18.9266 13.9057 18.0293 13.9057C17.132 13.9057 16.3696 14.6903 15.7189 15.291C15.617 15.3851 15.5203 15.4586 15.4424 15.5084C14.1737 16.317 12.4807 15.3439 12.4807 13.9057C12.4807 12.4676 14.1737 11.4945 15.4424 12.3031C15.7584 12.469 16.019 12.6894 16.2273 12.9183C16.6998 13.4375 17.3234 13.9057 18.0364 13.9057C18.9501 13.9057 19.716 13.1694 19.4445 12.3212C18.7666 10.2034 16.766 8.66863 14.4034 8.66863C13.4062 8.66863 12.9375 8.95085 12.9375 8.95085L15.0823 3.94719C15.4571 3.01828 14.7846 2 13.7964 2C13.27 2 12.7888 2.30213 12.5534 2.78042L10.125 7.71429M10.125 7.71429L9.67741 8.62368M10.125 7.71429V4.38095C10.125 3.59197 9.4954 2.95238 8.71875 2.95238C7.9421 2.95238 7.3125 3.59197 7.3125 4.38095V8.19048M7.3125 8.19048V11.5238'
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

OkFingerIcon.displayName = 'OkFingerIcon';
export default OkFingerIcon;
