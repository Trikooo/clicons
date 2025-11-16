import React from 'react';
import config from '../config';

interface ResetPasswordIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ResetPasswordIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/reset-password)
 * @see {@link https://clicons.dev/icon/reset-password}
 */
const ResetPasswordIcon = React.forwardRef<SVGSVGElement, ResetPasswordIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75334 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75334 2.5 12 2.5C15.8956 2.5 19.2436 4.84478 20.7095 8.2M21.5 5.5L21.025 8.675L18 8'
    }
  ],
  [
    'path',
    {
      d: 'M10 11V9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5V11M11.25 16.5H12.75C13.9228 16.5 14.5092 16.5 14.9131 16.19C15.0171 16.1102 15.1102 16.0171 15.19 15.9131C15.5 15.5092 15.5 14.9228 15.5 13.75C15.5 12.5772 15.5 11.9908 15.19 11.5869C15.1102 11.4829 15.0171 11.3898 14.9131 11.31C14.5092 11 13.9228 11 12.75 11H11.25C10.0772 11 9.49082 11 9.08686 11.31C8.98286 11.3898 8.88977 11.4829 8.80997 11.5869C8.5 11.9908 8.5 12.5772 8.5 13.75C8.5 14.9228 8.5 15.5092 8.80997 15.9131C8.88977 16.0171 8.98286 16.1102 9.08686 16.19C9.49082 16.5 10.0772 16.5 11.25 16.5Z'
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

ResetPasswordIcon.displayName = 'ResetPasswordIcon';
export default ResetPasswordIcon;
