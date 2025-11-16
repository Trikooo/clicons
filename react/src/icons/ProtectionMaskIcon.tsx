import React from 'react';
import config from '../config';

interface ProtectionMaskIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ProtectionMaskIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/protection-mask)
 * @see {@link https://clicons.dev/icon/protection-mask}
 */
const ProtectionMaskIcon = React.forwardRef<SVGSVGElement, ProtectionMaskIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.27574 22V18.4493C4.27574 17.172 3.93486 16.5167 3.26456 15.4113C2.46115 14.0864 2 12.5402 2 10.8889C2 5.97969 6.07554 2 11.103 2C15.4666 2 19.1132 4.99817 20 9'
    }
  ],
  [
    'path',
    {
      d: 'M15.0752 14.8454L18.991 12.4141C19.0832 12.3568 19.1294 12.3282 19.1753 12.3058C19.2213 12.2834 19.2749 12.2638 19.382 12.2245C19.933 12.0226 20.5435 11.8047 21.0395 12.2243C21.3015 12.4459 21.4245 12.8352 21.6707 13.6138C21.8649 14.2282 22.0806 14.8351 21.9699 15.487C21.9119 15.8283 21.7602 16.1483 21.4567 16.7883L20.0275 19.8024C19.4737 20.9703 19.1968 21.5542 18.2759 21.8609C17.3551 22.1675 16.9484 21.9358 16.135 21.4725C12.4487 19.3724 5.30998 13.2604 7.36438 10.4879C8.14017 9.44098 10.1234 9.73499 15.0752 14.8454ZM15.0752 14.8454L14.0098 20.0793'
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

ProtectionMaskIcon.displayName = 'ProtectionMaskIcon';
export default ProtectionMaskIcon;
