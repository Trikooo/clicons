import React from 'react';
import config from '../config';

interface KnivesIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KnivesIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/knives)
 * @see {@link https://clicons.dev/icon/knives}
 */
const KnivesIcon = React.forwardRef<SVGSVGElement, KnivesIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16 10L18.6025 7.39117C19.3659 7.49623 20.1693 7.26445 20.7565 6.69585C21.7478 5.73599 21.7478 4.17975 20.7565 3.21989C19.7652 2.26004 18.158 2.26004 17.1667 3.21989L12.5 7.73864'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 12L18.9252 10.5448C19.7397 10.663 20.5968 10.4023 21.2233 9.76257C22.2376 8.72688 22.2345 7.0592 21.3538 6'
    }
  ],
  [
    'path',
    {
      d: 'M14.1509 18.4629L16.1415 16.4928C17.3805 15.2666 18 14.6534 18 13.8916C18 13.1297 17.3805 12.5165 16.1415 11.2903L14.1703 9.33936C12.9313 8.11312 12.3118 7.5 11.542 7.5C10.7722 7.5 10.1527 8.11312 8.91368 9.33936L4.08868 14.1147C3.55152 14.6463 3.28294 14.9122 3.14147 15.2502C3 15.5882 3 15.9641 3 16.716V17.821C3 19.5552 3 20.4222 3.54434 20.961C4.08867 21.4997 4.9648 21.4997 6.71698 21.4997L13.1887 21.5C14.9565 21.5 15.8403 21.5 16.3895 20.9622C16.9387 20.4244 16.9387 19.5589 16.9387 17.8277V15.6928'
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

KnivesIcon.displayName = 'KnivesIcon';
export default KnivesIcon;
